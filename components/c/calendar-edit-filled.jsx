import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/biyv__4lr.css';
import '../../css/f/f_fvtdbvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="biyv__4lr"/><path class="f_fvtdbvw"/>`,
		"fallback": "tdesign:calendar-edit-filled",
	});
}

export default Component;
