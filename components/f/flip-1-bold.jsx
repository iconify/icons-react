import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/idvi9abbj.css';
import '../../css/g/gfl6m_b2c.css';
import '../../css/k/kb5hnv1mt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="idvi9abbj"/><path class="gfl6m_b2c"/><path class="kb5hnv1mt"/></g>`,
		"fallback": "glyphs:flip-1-bold",
	});
}

export default Component;
