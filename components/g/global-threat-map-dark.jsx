import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_0rlkxdi.css';
import '../../css/k/kiwyvcbue.css';
import '../../css/v/vieb4jbbe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_0rlkxdi"/><circle class="kiwyvcbue"/><circle class="vieb4jbbe"/>`,
		"fallback": "selfhst:global-threat-map-dark",
	});
}

export default Component;
