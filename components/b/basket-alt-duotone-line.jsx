import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o58hkebvg.css';
import '../../css/p/psbkcqb3f.css';
import '../../css/y/y5pnz-y8q.css';
import '../../css/x/x89gikkiv.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGLPWcmdDk"><g class="o58hkebvg"><path class="psbkcqb3f"/><path class="y5pnz-y8q"/><path class="x89gikkiv"/></g></mask></defs><path mask="url(#SVGLPWcmdDk)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:basket-alt-duotone-line",
	});
}

export default Component;
