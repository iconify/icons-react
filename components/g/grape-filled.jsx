import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy6yqbbtn.css';
import '../../css/c/ceo0jccjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dy6yqbbtn"/><path class="ceo0jccjy"/>`,
		"fallback": "tdesign:grape-filled",
	});
}

export default Component;
