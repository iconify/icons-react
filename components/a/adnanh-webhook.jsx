import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s06hljcsa.css';
import '../../css/b/b4hqx5wjx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s06hljcsa"/><path class="b4hqx5wjx"/>`,
		"fallback": "selfhst:adnanh-webhook",
	});
}

export default Component;
