import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnhwl-37f.css';
import '../../css/i/ipmkijbyf.css';
import '../../css/x/xsojoj1yq.css';
import '../../css/k/kai3f3bib.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnhwl-37f"/><path class="ipmkijbyf"/><path class="xsojoj1yq"/><path class="kai3f3bib"/>`,
		"fallback": "fxemoji:honeybee",
	});
}

export default Component;
