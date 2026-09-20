import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgi08m.css';
import '../../css/t/t5pxry.css';
import '../../css/y/y4wbml.css';
import '../../css/z/zxndow.css';
import '../../css/f/fr4-ze.css';
import '../../css/p/pzbnfz.css';
import '../../css/b/botfzx.css';
import '../../css/n/nyjsny.css';
import '../../css/s/s8e22g.css';
import '../../css/n/n43ciz.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-_-jasl.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlLM1ZcCd"><path class="sgi08m t5pxry y4wbml zxndow"/><path class="fr4-ze t5pxry zxndow"/><path class="pzbnfz"/></mask></defs><path mask="url(#SVGlLM1ZcCd)" class="botfzx"/><path class="nyjsny s8e22g t5pxry y4wbml"/><path class="n43ciz s8e22g t5pxry y4wbml"/>`,
		"fallback": "line-md:file-cancel",
	});
}

export default Component;
