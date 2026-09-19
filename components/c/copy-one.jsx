import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/n/nlfdz8b9y.css';
import '../../css/w/w-9--ob6j.css';
import '../../css/s/swjdnjbbn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOlHCtd3v"><g class="hv130ab-t"><path class="nlfdz8b9y"/><path class="w-9--ob6j"/><path class="swjdnjbbn"/></g></mask></defs><path mask="url(#SVGOlHCtd3v)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:copy-one",
	});
}

export default Component;
