import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqlclbcvx.css';
import '../../css/g/g5j-hk_bn.css';
import '../../css/t/tw5kz9gbt.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqlclbcvx"/><path class="g5j-hk_bn"/><path class="tw5kz9gbt"/>`,
		"fallback": "ant-design:comment-outlined",
	});
}

export default Component;
