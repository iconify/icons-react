import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edy1eelka.css';
import '../../css/a/afk9nsbuo.css';
import '../../css/k/khev3mkgt.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="clr-i-solid clr-i-solid-path-1 edy1eelka"/><path class="afk9nsbuo clr-i-solid clr-i-solid-path-2"/><path class="clr-i-solid clr-i-solid-path-3 khev3mkgt"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:administrator-solid",
	});
}

export default Component;
