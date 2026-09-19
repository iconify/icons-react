import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xqc9m_bhp.css';
import '../../css/t/tb18fbycs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xqc9m_bhp"/><path class="tb18fbycs"/></g>`,
		"fallback": "glyphs:buildings",
	});
}

export default Component;
