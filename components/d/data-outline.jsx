import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oobsdcc_i.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/f/flen3tbdj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGg38j6bxh" class="oobsdcc_i"/></defs><mask id="SVGgNbYfdiO" class="n1mjunbsu"><use href="#SVGg38j6bxh"/></mask><use href="#SVGg38j6bxh" mask="url(#SVGgNbYfdiO)" class="flen3tbdj"/>`,
		"fallback": "lsicon:data-outline",
	});
}

export default Component;
