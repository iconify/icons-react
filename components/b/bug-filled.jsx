import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbvjsy3py.css';
import '../../css/i/iun2kcife.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbvjsy3py"/><path class="iun2kcife"/>`,
		"fallback": "ant-design:bug-filled",
	});
}

export default Component;
