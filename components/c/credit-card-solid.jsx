import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8h2ct16o.css';
import '../../css/a/a624i4-jv.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="clr-i-solid clr-i-solid-path-1 k8h2ct16o" transform="rotate(90 18 18)"/><path class="a624i4-jv clr-i-solid clr-i-solid-path-2"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:credit-card-solid",
	});
}

export default Component;
