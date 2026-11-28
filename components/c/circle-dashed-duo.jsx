import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjzczbv1j.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n7uxtybia.css';
import '../../css/t/thz03s3ge.css';
import '../../css/x/xg5_0tb3g.css';
import '../../css/r/rmm-jwb1k.css';
import '../../css/n/ng0hgqb3f.css';
import '../../css/z/z0-biybbo.css';
import '../../css/p/pmhko9k1v.css';
import '../../css/e/e5pth4b1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjzczbv1j secondary"/><g class="dt0cm9dhy primary"><path class="n7uxtybia"/><path class="thz03s3ge"/><path class="xg5_0tb3g"/><path class="rmm-jwb1k"/><path class="ng0hgqb3f"/><path class="z0-biybbo"/><path class="pmhko9k1v"/><path class="e5pth4b1h"/></g>`,
		"fallback": "iconaut:circle-dashed-duo",
	});
}

export default Component;
