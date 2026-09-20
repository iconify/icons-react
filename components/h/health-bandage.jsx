import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byt1vbcft.css';
import '../../css/u/ue2etpb8g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byt1vbcft"/><path class="ue2etpb8g"/>`,
		"fallback": "streamline-pixel:health-bandage",
	});
}

export default Component;
