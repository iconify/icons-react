import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivjvz2eii.css';
import '../../css/h/h0y2fptca.css';
import '../../css/i/ir0enebei.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aodo8cbut.css';
import '../../css/z/zzo7dubip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVG8dJ0oeeE" width="15" height="15" x="4" y="5" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="h0y2fptca"/><path class="ir0enebei"/></mask><g class="ft5dv1b6b"><path mask="url(#SVG8dJ0oeeE)" class="aodo8cbut"/><path class="zzo7dubip"/></g>`,
		"fallback": "lets-icons:edit-light",
	});
}

export default Component;
