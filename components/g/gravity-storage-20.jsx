import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a96_0cw9u.css';
import '../../css/u/u46pxbx6o.css';
import '../../css/l/lsr586-me.css';
import '../../css/l/lep3v53in.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a96_0cw9u"/><path class="u46pxbx6o"/><path class="lsr586-me"/><path class="lep3v53in"/>`,
		"fallback": "energy-icons:gravity-storage-20",
	});
}

export default Component;
