import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q69ehq5vm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q69ehq5vm"/>`,
		"fallback": "vadivam:file-box",
	});
}

export default Component;
