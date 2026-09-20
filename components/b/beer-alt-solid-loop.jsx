import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0tnx4bjy.css';
import '../../css/n/n1mjunbsu.css';
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
		"content": `<defs><mask id="SVGEC61Gcah"><path d="M18 23c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2" class="h0tnx4bjy"><animateTransform attributeName="transform" dur="3s" repeatCount="indefinite" type="translate" values="0;10"/><animate fill="freeze" attributeName="d" begin="0.6s" dur="0.3s" to="M18 7c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2"/></path><path d="M18 23c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2v15h25Z" class="n1mjunbsu"><animateTransform attributeName="transform" dur="3s" repeatCount="indefinite" type="translate" values="0;10"/><animate fill="freeze" attributeName="d" begin="0.6s" dur="0.3s" to="M18 7c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2v15h25Z"/></path><path class="pezwhmz2k"/></mask></defs><path mask="url(#SVGEC61Gcah)" class="w49j0rbvv"/><path class="u8-8_86dt"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="62;0"/></path>`,
		"fallback": "line-md:beer-alt-solid-loop",
	});
}

export default Component;
