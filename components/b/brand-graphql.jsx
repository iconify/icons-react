import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xx-k1vz6a.css';
import '../../css/c/cju0o0byw.css';
import '../../css/q/qij0565wu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xx-k1vz6a"/><path class="cju0o0byw"/><path class="qij0565wu"/></g>`,
		"fallback": "tabler:brand-graphql",
	});
}

export default Component;
