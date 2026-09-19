import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvvpg1bae.css';
import '../../css/o/o2fnn15tf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvvpg1bae"/><path class="o2fnn15tf"/>`,
		"fallback": "cuida:hashtag-outline",
	});
}

export default Component;
