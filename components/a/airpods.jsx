import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/w/w7jmnbb6l.css';
import '../../css/i/ir0hb5b-u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGqjZUEW8V"><g class="wwvp95byt"><path class="w7jmnbb6l"/><path class="ir0hb5b-u"/></g></mask></defs><path mask="url(#SVGqjZUEW8V)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:airpods",
	});
}

export default Component;
