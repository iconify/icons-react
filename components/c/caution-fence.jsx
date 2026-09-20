import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j25q1q_nx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j25q1q_nx"/>`,
		"fallback": "streamline-cyber:caution-fence",
	});
}

export default Component;
