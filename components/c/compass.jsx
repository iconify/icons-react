import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u024t_vxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u024t_vxb"><animateTransform id="SVGKSLUAcIu" attributeName="transform" attributeType="XML" begin="0;SVGKjj5hd4q.end" dur="1s" from="-90 12 12" to="0 12 12" type="rotate"/><animateTransform id="SVGkFYRWcWj" attributeName="transform" attributeType="XML" begin="SVGKSLUAcIu.end" dur="1s" from="0 12 12" to="-90 12 12" type="rotate"/><animateTransform id="SVGKjj5hd4q" attributeName="transform" attributeType="XML" begin="SVGkFYRWcWj.end" dur="1s" from="-90 12 12" to="270 12 12" type="rotate"/></path>`,
		"fallback": "eos-icons:compass",
	});
}

export default Component;
