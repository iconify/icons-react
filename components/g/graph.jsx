import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifg97u3ia.css';
import '../../css/z/zu3tvtb-o.css';
import '../../css/u/uc8tngikx.css';
import '../../css/c/cmc75bc9x.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ifg97u3ia"/><path clip-rule="evenodd" class="zu3tvtb-o"/><path clip-rule="evenodd" class="uc8tngikx"/><path clip-rule="evenodd" class="cmc75bc9x"/>`,
		"fallback": "flat-ui:graph",
	});
}

export default Component;
