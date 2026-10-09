import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md4nzgbup.css';
import '../../css/e/e41hepbqx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md4nzgbup"/><path class="e41hepbqx"/>`,
		"fallback": "energy-icons:golf-20",
	});
}

export default Component;
