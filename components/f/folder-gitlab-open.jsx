import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k51-r1btv.css';
import '../../css/l/lhgt1qzum.css';
import '../../css/m/m023sbovp.css';
import '../../css/f/fyazefb-a.css';
import '../../css/o/oz3vbfwze.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k51-r1btv"/><path class="lhgt1qzum"/><path class="m023sbovp"/><path class="fyazefb-a"/><path class="oz3vbfwze"/>`,
		"fallback": "material-icon-theme:folder-gitlab-open",
	});
}

export default Component;
