import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii5d476rw.css';
import '../../css/h/hqx9vqk3m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ii5d476rw"/><path class="hqx9vqk3m"/>`,
		"fallback": "heroicons:briefcase-16-solid",
	});
}

export default Component;
