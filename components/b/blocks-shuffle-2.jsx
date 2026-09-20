import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt2zwjbzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect x="1" y="1" class="qt2zwjbzi"><animate id="SVG7JagGz2Y" fill="freeze" attributeName="x" begin="0;SVGgDT19bUV.end" dur="0.2s" values="1;13"/><animate id="SVGpS1BddYk" fill="freeze" attributeName="y" begin="SVGc7yq8dne.end" dur="0.2s" values="1;13"/><animate id="SVGboa7EdFl" fill="freeze" attributeName="x" begin="SVG0ZX9C6Fa.end" dur="0.2s" values="13;1"/><animate id="SVG6rrusL2C" fill="freeze" attributeName="y" begin="SVGTOnnO5Dr.end" dur="0.2s" values="13;1"/></rect><rect x="1" y="13" class="qt2zwjbzi"><animate id="SVGc7yq8dne" fill="freeze" attributeName="y" begin="SVG7JagGz2Y.end" dur="0.2s" values="13;1"/><animate id="SVG0ZX9C6Fa" fill="freeze" attributeName="x" begin="SVGpS1BddYk.end" dur="0.2s" values="1;13"/><animate id="SVGTOnnO5Dr" fill="freeze" attributeName="y" begin="SVGboa7EdFl.end" dur="0.2s" values="1;13"/><animate id="SVGgDT19bUV" fill="freeze" attributeName="x" begin="SVG6rrusL2C.end" dur="0.2s" values="13;1"/></rect>`,
		"fallback": "svg-spinners:blocks-shuffle-2",
	});
}

export default Component;
