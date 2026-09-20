import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x_do2zbgo.css';
import '../../css/m/mfad4jbqu.css';
import '../../css/h/hajfi2icj.css';
import '../../css/l/lkfkk6b1i.css';
import '../../css/m/mf5mjp-mg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x_do2zbgo"/><path class="mfad4jbqu"/><path class="hajfi2icj"/><path class="lkfkk6b1i"/><path class="mf5mjp-mg"/></g>`,
		"fallback": "streamline-freehand-color:cloud-storage-drive",
	});
}

export default Component;
