import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hezef_byw.css';
import '../../css/d/d1pmd7kqe.css';
import '../../css/d/dtu5ajbhp.css';
import '../../css/f/fh-lkzwdf.css';
import '../../css/p/p827oopjl.css';
import '../../css/a/ahqq_ebjq.css';
import '../../css/k/kw2zlrbay.css';
import '../../css/k/koorybb7d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGTR7m8dql" x1="-48.592" x2="-44.325" y1="651.842" y2="647.575" gradientTransform="matrix(120 0 0 -120 5831 78221)" gradientUnits="userSpaceOnUse"><stop offset="0" class="hezef_byw"/><stop offset="1" class="d1pmd7kqe"/></linearGradient><path fill="url(#SVGTR7m8dql)" class="dtu5ajbhp"/><linearGradient id="SVGfcFukdCg" x1="-47.911" x2="-43.644" y1="649.848" y2="645.581" gradientTransform="matrix(90 0 0 -70 4376 45596)" gradientUnits="userSpaceOnUse"><stop offset="0" class="fh-lkzwdf"/><stop offset="1" class="p827oopjl"/></linearGradient><path fill="url(#SVGfcFukdCg)" class="ahqq_ebjq"/><circle class="kw2zlrbay"/><circle class="koorybb7d"/>`,
		"fallback": "selfhst:github-release-monitor",
	});
}

export default Component;
