import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bju99-9zx.css';
import '../../css/p/pl4wrbb3x.css';
import '../../css/y/yhlbi21sm.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bju99-9zx"/><path class="pl4wrbb3x"/><path class="yhlbi21sm"/>`,
		"fallback": "medical-icon:ambulance",
	});
}

export default Component;
