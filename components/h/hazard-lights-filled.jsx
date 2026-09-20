import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5jbxh.css';
import '../../css/i/iw1iew.css';
import '../../css/e/eswpkb.css';
import '../../css/s/so-from-28.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-z2xg2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5jbxh iw1iew"/><path class="eswpkb iw1iew"/>`,
		"fallback": "line-md:hazard-lights-filled",
	});
}

export default Component;
