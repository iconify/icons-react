import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajn8phm8g.css';
import '../../css/k/k40n7cc3w.css';
import '../../css/z/za4zvgzpd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajn8phm8g"/><path class="k40n7cc3w"/><path class="za4zvgzpd"/>`,
		"fallback": "streamline-pixel:construction-building-real-eastate",
	});
}

export default Component;
