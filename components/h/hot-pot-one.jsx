import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/h/hiex7vbze.css';
import '../../css/w/wi0hxqbvh.css';
import '../../css/r/r63gkvb4j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGa1clkbqb"><g class="gopnm44um"><path class="hiex7vbze"/><path class="wi0hxqbvh"/><path class="r63gkvb4j"/></g></mask></defs><path mask="url(#SVGa1clkbqb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:hot-pot-one",
	});
}

export default Component;
