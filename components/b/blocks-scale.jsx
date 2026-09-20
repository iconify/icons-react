import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc7k3obqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect width="9" height="9" x="1.5" y="1.5" class="cc7k3obqc"><animate id="SVGvBHXGeBR" attributeName="x" begin="0;SVGBBjjneux.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5"/><animate attributeName="y" begin="0;SVGBBjjneux.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5"/><animate attributeName="width" begin="0;SVGBBjjneux.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/><animate attributeName="height" begin="0;SVGBBjjneux.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/></rect><rect width="9" height="9" x="13.5" y="1.5" class="cc7k3obqc"><animate attributeName="x" begin="SVGvBHXGeBR.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5"/><animate attributeName="y" begin="SVGvBHXGeBR.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5"/><animate attributeName="width" begin="SVGvBHXGeBR.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/><animate attributeName="height" begin="SVGvBHXGeBR.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/></rect><rect width="9" height="9" x="13.5" y="13.5" class="cc7k3obqc"><animate attributeName="x" begin="SVGvBHXGeBR.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5"/><animate attributeName="y" begin="SVGvBHXGeBR.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5"/><animate attributeName="width" begin="SVGvBHXGeBR.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/><animate attributeName="height" begin="SVGvBHXGeBR.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/></rect><rect width="9" height="9" x="1.5" y="13.5" class="cc7k3obqc"><animate id="SVGBBjjneux" attributeName="x" begin="SVGvBHXGeBR.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5"/><animate attributeName="y" begin="SVGvBHXGeBR.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5"/><animate attributeName="width" begin="SVGvBHXGeBR.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/><animate attributeName="height" begin="SVGvBHXGeBR.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/></rect>`,
		"fallback": "svg-spinners:blocks-scale",
	});
}

export default Component;
