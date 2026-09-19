import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abjmkbc1f.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abjmkbc1f"/>`,
		"fallback": "ant-design:flag-filled",
	});
}

export default Component;
