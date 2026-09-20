import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-llkv2cb.css';
import '../../css/s/sll_zg-uo.css';
import '../../css/c/cuw1bibky.css';
import '../../css/h/hgc-grfuk.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/l/l4xta_b4t.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/s9skwebxk.css';
import '../../css/n/nx5d-bc1s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><filter id="SVGtW6Dne1o" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="SVGfOBQveUd" width="117.5%" height="117.5%" x="-8.8%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="SVGxjwWZbcU" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" class="d-llkv2cb"/><stop offset="100%" class="sll_zg-uo"/></linearGradient><circle id="SVGMSOqEeDZ" class="cuw1bibky"/><path id="SVGjJpXTcNm" class="hgc-grfuk"/></defs><g class="ft5dv1b6b"><use filter="url(#SVGtW6Dne1o)" href="#SVGMSOqEeDZ" class="ivjvz2eii"/><use href="#SVGMSOqEeDZ" class="l4xta_b4t"/><use fill="url(#SVGxjwWZbcU)" href="#SVGMSOqEeDZ" class="d2kvgvbvc"/><circle class="s9skwebxk"/><use filter="url(#SVGfOBQveUd)" href="#SVGjJpXTcNm" class="ivjvz2eii"/><use href="#SVGjJpXTcNm" class="nx5d-bc1s"/></g>`,
		"fallback": "thesvg-color:bnb",
	});
}

export default Component;
