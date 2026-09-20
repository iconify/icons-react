import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlm3xgzsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlm3xgzsb"/>`,
		"fallback": "vadivam:git-commit-vertical",
	});
}

export default Component;
