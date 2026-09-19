import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxiwn8bvd.css';
import '../../css/b/barzez2jy.css';
import '../../css/j/jj9bo7dmt.css';
import '../../css/v/vxb-tcqtz.css';
import '../../css/a/a4_l8db9a.css';
import '../../css/t/t8sqs3ncp.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rxiwn8bvd"/><path clip-rule="evenodd" class="barzez2jy"/><path clip-rule="evenodd" class="jj9bo7dmt"/><path clip-rule="evenodd" class="vxb-tcqtz"/><path clip-rule="evenodd" class="a4_l8db9a"/><path clip-rule="evenodd" class="t8sqs3ncp"/>`,
		"fallback": "flat-ui:box",
	});
}

export default Component;
