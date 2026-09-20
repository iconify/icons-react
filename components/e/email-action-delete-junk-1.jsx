import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on1p6hbis.css';
import '../../css/w/w2-97pbpu.css';
import '../../css/a/au6i7gblr.css';
import '../../css/p/pwmwo4bti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="on1p6hbis"/><path class="w2-97pbpu"/><path class="au6i7gblr"/><path class="pwmwo4bti"/>`,
		"fallback": "streamline-freehand:email-action-delete-junk-1",
	});
}

export default Component;
