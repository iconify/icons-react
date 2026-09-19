import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xruktb97h.css';
import '../../css/c/czrbmi21p.css';
import '../../css/i/igyl9v99d.css';
import '../../css/o/osn79cbkl.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xruktb97h"/><path class="czrbmi21p"/><path class="igyl9v99d"/><path class="osn79cbkl"/>`,
		"fallback": "ant-design:file-zip-twotone",
	});
}

export default Component;
