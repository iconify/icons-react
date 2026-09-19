import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5_zu7bdk.css';
import '../../css/e/elcyybcku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGdPdPCXCl" class="f5_zu7bdk"/><path id="SVGXdxzPddm" class="elcyybcku"/></defs><use href="#SVGdPdPCXCl"/><use href="#SVGXdxzPddm"/><use href="#SVGdPdPCXCl"/><use href="#SVGXdxzPddm"/>`,
		"fallback": "eva:cloud-download-fill",
	});
}

export default Component;
