import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j45gumh3f {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m6.97 17.531l4.5 4.499q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069t.113-.094l4.5-4.499q-.106.105-.243.162q-.138.057-.287.057t-.287-.057t-.243-.163L12 13.561L8.03 17.53q-.105.106-.243.163t-.287.057t-.287-.057t-.243-.162m-.001-.001q-.052-.053-.093-.114t-.069-.13t-.043-.14Q6.75 17.073 6.75 17q0-.074.014-.147q.015-.072.043-.14t.069-.13t.094-.113l4.5-4.5q.105-.106.243-.163T12 11.75t.287.057t.243.163l4.5 4.5q.053.052.094.113t.069.13t.043.14t.014.146q0 .074-.014.147q-.015.072-.043.14t-.069.13t-.093.114l4.999-5l.003-.002q.052-.053.093-.114q.04-.062.068-.13q.028-.069.042-.141q.014-.073.014-.147q0-.073-.015-.146q-.015-.072-.043-.14q-.029-.068-.07-.13q-.042-.061-.094-.113Q17.863 7.342 12 7.342T1.972 11.467l-.002.003q-.106.105-.163.243T1.75 12t.057.287t.163.243z");
}
</style><path class="j45gumh3f"/>`,
		"fallback": "uix-solid:baseball-field-top",
	});
}

export default Component;
