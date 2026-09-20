import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw884i5gz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qw884i5gz"/>`,
		"fallback": "streamline-freehand:cell-formating-border-horizontal-vertical",
	});
}

export default Component;
