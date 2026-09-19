import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5ym2eb1u.css';
import '../../css/x/xvd21f26a.css';
import '../../css/p/pnz8p0bet.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="c5ym2eb1u"/><path class="xvd21f26a"/><path class="pnz8p0bet"/>`,
		"fallback": "carbon:ibm-openshift-container-platform-on-vpc-for-regulated-industries",
	});
}

export default Component;
