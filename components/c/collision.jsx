import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-c1zgbnj.css';
import '../../css/a/amusoxbhb.css';
import '../../css/s/serii-led.css';
import '../../css/c/cuarf-7ca.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-c1zgbnj"/><path class="amusoxbhb"/><path class="serii-led"/><path class="cuarf-7ca"/>`,
		"fallback": "streamline-emojis:collision",
	});
}

export default Component;
