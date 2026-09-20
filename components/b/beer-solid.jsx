import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wegqufvjn.css';
import '../../css/i/i7iibbc8a.css';
import '../../css/p/pezwhmz2k.css';
import '../../css/w/w49j0rbvv.css';
import '../../css/u/u8-8_86dt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfecNzb0o"><path stroke-dashoffset="18" class="wegqufvjn"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.3s" to="0"/></path><path fill-opacity="0" class="i7iibbc8a"><animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.4s" to="1"/></path><path class="pezwhmz2k"/></mask></defs><path mask="url(#SVGfecNzb0o)" class="w49j0rbvv"/><path class="u8-8_86dt"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="62;0"/></path>`,
		"fallback": "line-md:beer-solid",
	});
}

export default Component;
