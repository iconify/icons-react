import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js71uubxl.css';
import '../../css/g/gwy33kf_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="js71uubxl"/><path class="gwy33kf_f"/>`,
		"fallback": "tdesign:draft-filled",
	});
}

export default Component;
