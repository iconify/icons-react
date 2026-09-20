import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzwi_04ry.css';
import '../../css/b/b211n8bbq.css';
import '../../css/k/kkjeueuqj.css';
import '../../css/l/ly9osabyz.css';
import '../../css/g/g0wwjw9mn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzwi_04ry"/><path class="b211n8bbq"/><path class="kkjeueuqj"/><path class="ly9osabyz"/><path class="g0wwjw9mn"/>`,
		"fallback": "streamline-pixel:building-real-eastate-deal-documant",
	});
}

export default Component;
