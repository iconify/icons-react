import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x76u0mbom.css';
import '../../css/e/e3kfaebri.css';
import '../../css/c/cqobgebwn.css';
import '../../css/b/b6keo2bec.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="x76u0mbom"/><circle class="e3kfaebri"/><circle class="cqobgebwn"/><circle class="b6keo2bec"/>`,
		"fallback": "selfhst:anonymousoverflow",
	});
}

export default Component;
